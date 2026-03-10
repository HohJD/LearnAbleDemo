import { useState } from 'react';
import {
    Eye,
    Volume2,
    Palette,
    Check,
    X,
    Edit3,
    ChevronRight,
    ShieldCheck,
    Play,
    Camera,
    CameraOff,
    User,
    MonitorPlay
} from 'lucide-react';
import './AIAdaptationDemo.css';

type AdaptationType = 'standard' | 'color' | 'visual' | 'hearing';

interface Adaptation {
    id: string;
    type: AdaptationType;
    title: string;
    original: string;
    adapted: string;
    status: 'pending' | 'approved' | 'rejected';
}

const initialAdaptations: Adaptation[] = [
    {
        id: 'a0',
        type: 'standard',
        title: 'Standard Lesson',
        original: 'Original uploaded materials without modifications.',
        adapted: 'Added AI-generated topic summary and interactive table of contents for easier navigation.',
        status: 'pending',
    },
    {
        id: 'a1',
        type: 'color',
        title: 'Colour Blind Mode',
        original: 'Quiz UI uses red/green to indicate right/wrong answers.',
        adapted: 'Shifted palette to Blue/Orange and added pattern overlays to ensure distinguishability.',
        status: 'pending',
    },
    {
        id: 'a2',
        type: 'visual',
        title: 'Visual Impairment Mode',
        original: 'Standard text layout with complex diagrams (no alt text).',
        adapted: 'Applied large text layout, simplified structure, added structural Alt Text for charts, and enabled text-to-speech support.',
        status: 'pending',
    },
    {
        id: 'a3',
        type: 'hearing',
        title: 'Hearing Impairment Mode',
        original: 'Embedded "intro to cell biology.mp4" (No captions)',
        adapted: 'Generated synchronized closed captions (.vtt), interactive text transcript, and sign-language support placeholders.',
        status: 'pending',
    }
];

const AIAdaptationDemo = () => {
    const [adaptations, setAdaptations] = useState<Adaptation[]>(initialAdaptations);
    const [activeTab, setActiveTab] = useState<AdaptationType | 'all'>('all');
    const [classStarted, setClassStarted] = useState(false);
    const [showCameraPrompt, setShowCameraPrompt] = useState(false);
    const [cameraEnabled, setCameraEnabled] = useState<boolean | null>(null);

    const handleStatusUpdate = (id: string, newStatus: 'approved' | 'rejected') => {
        setAdaptations(prev =>
            prev.map(ad => ad.id === id ? { ...ad, status: newStatus } : ad)
        );
    };

    const startClass = () => {
        setClassStarted(true);
        // Show camera prompt quickly after starting class
        setTimeout(() => {
            setShowCameraPrompt(true);
        }, 1500);
    };

    const getIconForType = (type: AdaptationType) => {
        switch (type) {
            case 'standard': return <MonitorPlay size={20} className="icon-standard" />;
            case 'visual': return <Eye size={20} className="icon-visual" />;
            case 'hearing': return <Volume2 size={20} className="icon-hearing" />;
            case 'color': return <Palette size={20} className="icon-color" />;
        }
    };

    const filteredAdaptations = activeTab === 'all'
        ? adaptations
        : adaptations.filter(ad => ad.type === activeTab);

    const pendingCount = adaptations.filter(ad => ad.status === 'pending').length;

    if (classStarted) {
        return (
            <div className="in-class-experience animate-fade-in">
                <div className="dashboard-header">
                    <div className="header-info">
                        <h2>In-Class Student Experience <span className="demo-badge">Live Demo Simulation</span></h2>
                        <p>Students are now interacting with the lesson in their preferred accessibility modes in real-time.</p>
                    </div>
                </div>

                <div className="student-grid mt-4">
                    <div className="student-view-card card">
                        <div className="student-header">
                            <MonitorPlay size={20} className="icon-standard" />
                            <h3>Standard View</h3>
                        </div>
                        <div className="student-content">
                            <p>Viewing original lesson layout with the AI-generated quick summary active.</p>
                            <div className="mock-ui">
                                <div className="mock-title">Cell Biology Basics</div>
                                <div className="mock-summary-box">Summary: Cells are the basic structural...</div>
                            </div>
                        </div>
                    </div>

                    <div className="student-view-card card">
                        <div className="student-header">
                            <Palette size={20} className="icon-color" />
                            <h3>Colour Blind Mode</h3>
                        </div>
                        <div className="student-content">
                            <p>Viewing colour-safe charts (Blue/Orange) and labelled diagrams.</p>
                            <div className="mock-ui bg-dark">
                                <div className="mock-chart-bar orange"></div>
                                <div className="mock-chart-bar blue"></div>
                                <span className="mock-label">Label: Nucleus</span>
                            </div>
                        </div>
                    </div>

                    <div className="student-view-card card">
                        <div className="student-header">
                            <Eye size={20} className="icon-visual" />
                            <h3>Visual Impairment Mode</h3>
                        </div>
                        <div className="student-content">
                            <p>Using large text, simplified list layout, and text-to-speech active.</p>
                            <div className="mock-ui high-contrast">
                                <div className="mock-large-text">1. Mitochondria</div>
                                <div className="mock-audio-wave">||||||||||</div>
                            </div>
                        </div>
                    </div>

                    <div className="student-view-card card">
                        <div className="student-header">
                            <Volume2 size={20} className="icon-hearing" />
                            <h3>Hearing Impairment Mode</h3>
                        </div>
                        <div className="student-content">
                            <p>Video playing with synchronized captions and active transcript sidebar.</p>
                            <div className="mock-ui split-view">
                                <div className="mock-video">[Video + Captions]</div>
                                <div className="mock-transcript">Transcript...</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional Attention Check Overlay */}
                {showCameraPrompt && cameraEnabled === null && (
                    <div className="modal-overlay">
                        <div className="camera-prompt-modal card animate-fade-in">
                            <div className="modal-icon text-cyan">
                                <Camera size={32} />
                            </div>
                            <div className="modal-badge">Prototype Feature</div>
                            <h3>Enable Attention Support Feature?</h3>
                            <p>
                                This is an optional, camera-enabled focus detection simulation.
                                It demonstrates how we might aggregate non-intrusive attention signals
                                to help you gauge class engagement without surveillance.
                            </p>
                            <div className="modal-actions">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setCameraEnabled(true)}
                                >
                                    Allow Camera
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setCameraEnabled(false)}
                                >
                                    Skip for Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Camera Simulation View */}
                {cameraEnabled && (
                    <div className="prototype-camera-view card mt-4 animate-fade-in">
                        <div className="camera-header">
                            <div className="flex-center gap-2">
                                <Camera size={20} className="text-cyan" />
                                <h3>Attention Support Demonstration</h3>
                                <span className="demo-badge text-xs">Simulated UI</span>
                            </div>
                            <button
                                className="btn-icon"
                                onClick={() => setCameraEnabled(false)}
                                title="Disable Camera"
                            >
                                <CameraOff size={18} />
                            </button>
                        </div>
                        <p className="text-sm text-secondary mb-4">
                            Visual simulation of local, privacy-preserving focus detection. No video is recorded or stored.
                        </p>
                        <div className="camera-feed-mock">
                            <div className="face-box">
                                <User size={64} className="text-muted" />
                                <div className="attention-label positive">Eyes on screen</div>
                            </div>
                            <div className="face-box blurred">
                                <User size={64} className="text-muted" />
                                <div className="attention-label warning">Looking away</div>
                            </div>
                            <div className="face-box">
                                <User size={64} className="text-muted" />
                                <div className="attention-label warning">Low attention detected</div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-4">
                    <p className="text-sm text-secondary italic">
                        Note: Navigate to the Performance tab to view how these simulated signals are aggregated for the teacher.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="adaptation-container">
            <div className="dashboard-header">
                <div className="header-info">
                    <h2>AI Adaptation Review</h2>
                    <p>Review the four tailored lesson versions generated by the AI before starting the class.</p>
                </div>
                <div className="header-actions-right">
                    <div className="status-badge">
                        <ShieldCheck size={20} className={pendingCount === 0 ? 'text-success' : 'text-warning'} />
                        <span>{pendingCount} Pending</span>
                    </div>
                    <button
                        className={`btn ${pendingCount === 0 ? 'btn-primary' : 'btn-secondary'} pulse-btn`}
                        onClick={startClass}
                    >
                        <Play size={18} />
                        Start Class
                    </button>
                </div>
            </div>

            <div className="filter-tabs">
                <button
                    className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    All Versions
                </button>
                <button
                    className={`tab-btn ${activeTab === 'standard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('standard')}
                >
                    <MonitorPlay size={16} /> Standard
                </button>
                <button
                    className={`tab-btn ${activeTab === 'color' ? 'active' : ''}`}
                    onClick={() => setActiveTab('color')}
                >
                    <Palette size={16} /> Colour Blind
                </button>
                <button
                    className={`tab-btn ${activeTab === 'visual' ? 'active' : ''}`}
                    onClick={() => setActiveTab('visual')}
                >
                    <Eye size={16} /> Visual Impairment
                </button>
                <button
                    className={`tab-btn ${activeTab === 'hearing' ? 'active' : ''}`}
                    onClick={() => setActiveTab('hearing')}
                >
                    <Volume2 size={16} /> Hearing Impairment
                </button>
            </div>

            <div className="adaptations-list">
                {filteredAdaptations.map(adaptation => (
                    <div key={adaptation.id} className={`adaptation-card card status-${adaptation.status}`}>
                        <div className="adaptation-header">
                            <div className="title-section">
                                {getIconForType(adaptation.type)}
                                <h3>{adaptation.title}</h3>
                            </div>

                            <div className="action-buttons">
                                {adaptation.status === 'pending' ? (
                                    <>
                                        <button
                                            className="action-btn approve"
                                            onClick={() => handleStatusUpdate(adaptation.id, 'approved')}
                                            title="Approve Adaptation"
                                        >
                                            <Check size={18} /> Approve
                                        </button>
                                        <button
                                            className="action-btn edit"
                                            title="Edit Adaptation"
                                        >
                                            <Edit3 size={18} /> Edit
                                        </button>
                                        <button
                                            className="action-btn reject"
                                            onClick={() => handleStatusUpdate(adaptation.id, 'rejected')}
                                            title="Reject Adaptation"
                                        >
                                            <X size={18} /> Reject
                                        </button>
                                    </>
                                ) : (
                                    <div className={`status-label label-${adaptation.status}`}>
                                        {adaptation.status === 'approved' ? (
                                            <><Check size={16} /> Approved</>
                                        ) : (
                                            <><X size={16} /> Rejected</>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="comparison-view">
                            <div className="comparison-pane original">
                                <span className="pane-label">Original Content</span>
                                <p>{adaptation.original}</p>
                            </div>

                            <div className="comparison-arrow">
                                <ChevronRight size={24} />
                            </div>

                            <div className="comparison-pane adapted">
                                <span className="pane-label">AI Adaptation Proposal</span>
                                <p>{adaptation.adapted}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIAdaptationDemo;
