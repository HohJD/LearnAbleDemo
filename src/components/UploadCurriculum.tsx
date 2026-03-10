import { useState, useRef } from 'react';
import { UploadCloud, File, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import './UploadCurriculum.css';

interface UploadCurriculumProps {
    onUploadComplete: () => void;
}

const UploadCurriculum = ({ onUploadComplete }: UploadCurriculumProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'processing' | 'success' | 'error'>('idle');
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const simulateUploadAndProcessing = () => {
        setUploadState('uploading');
        let currentProgress = 0;

        // Simulate upload
        const uploadInterval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 15) + 5;
            if (currentProgress >= 100) {
                clearInterval(uploadInterval);
                setProgress(100);

                // Transition to processing
                setTimeout(() => {
                    setUploadState('processing');

                    // Transition to success
                    setTimeout(() => {
                        setUploadState('success');
                        setTimeout(() => {
                            onUploadComplete();
                        }, 1500);
                    }, 2000);
                }, 500);
            } else {
                setProgress(currentProgress);
            }
        }, 300);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            simulateUploadAndProcessing();
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            simulateUploadAndProcessing();
        }
    };

    return (
        <div className="upload-container">
            <div className="header-section">
                <h2>Curriculum Preparation</h2>
                <p>Upload your national curriculum materials 2 hours before class to generate AI-assisted accessibility adaptations.</p>
            </div>

            <div className="upload-card card">
                {uploadState === 'idle' && (
                    <div
                        className={`drop-zone ${isDragging ? 'drag-active' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <div className="icon-wrapper">
                            <UploadCloud size={48} />
                        </div>
                        <h3>Drag & Drop Files Here</h3>
                        <p>Support PDF, PPTX, DOCX up to 50MB</p>
                        <button className="btn btn-secondary mt-4">Browse Files</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileSelect}
                            accept=".pdf,.ppt,.pptx,.doc,.docx"
                        />
                    </div>
                )}

                {uploadState === 'uploading' && (
                    <div className="upload-status state-uploading">
                        <File className="pulse-icon" size={48} />
                        <h3>Uploading Material...</h3>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p>{progress}% Complete</p>
                    </div>
                )}

                {uploadState === 'processing' && (
                    <div className="upload-status state-processing">
                        <Loader2 className="spinner-icon" size={48} />
                        <h3>AI is Processing Content...</h3>
                        <p>Analyzing text, extracting imagery, and mapping cognitive requirements.</p>
                        <div className="scanning-line"></div>
                    </div>
                )}

                {uploadState === 'success' && (
                    <div className="upload-status state-success">
                        <CheckCircle className="success-icon" size={48} />
                        <h3>Content Successfully Digested!</h3>
                        <p>Preparing the AI adaptation review dashboard...</p>
                    </div>
                )}

                {uploadState === 'error' && (
                    <div className="upload-status state-error">
                        <AlertCircle className="error-icon" size={48} />
                        <h3>Upload Failed</h3>
                        <p>The file type is not supported or the file is too large.</p>
                        <button className="btn btn-secondary mt-4" onClick={() => setUploadState('idle')}>Try Again</button>
                    </div>
                )}
            </div>

            <div className="info-cards">
                <div className="info-card card">
                    <h4>Why 2 Hours?</h4>
                    <p>Our AI needs at least 2 hours to comprehensively process the material, generate alternative text, adjust color palettes, and create audio transcripts for comprehensive classroom accessibility.</p>
                </div>
            </div>
        </div>
    );
};

export default UploadCurriculum;
