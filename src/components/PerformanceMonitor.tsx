import {
    Users,
    TrendingUp,
    Activity,
    Brain,
    Eye,
    Camera,
    Layers
} from 'lucide-react';
import './PerformanceMonitor.css';

const PerformanceMonitor = () => {
    return (
        <div className="performance-container">
            <div className="dashboard-header mb-2">
                <div className="header-info">
                    <h2>Teacher Performance Monitor <span className="demo-badge">Simulated Insights</span></h2>
                    <p>Displays aggregated, non-intrusive indicators on adaptation use, engagement, and comprehension.</p>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card card">
                    <div className="stat-icon-wrapper text-cyan">
                        <Users size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Active Engagement</span>
                        <div className="stat-value">
                            <h3>85%</h3>
                            <span className="trend positive"><TrendingUp size={16} /> +5%</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card card">
                    <div className="stat-icon-wrapper text-purple">
                        <Activity size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Adaptation Usage</span>
                        <div className="stat-value">
                            <h3>12</h3>
                            <span className="trend positive">Students</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card card">
                    <div className="stat-icon-wrapper text-emerald">
                        <Brain size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Comprehension Lift</span>
                        <div className="stat-value">
                            <h3>+18%</h3>
                            <span className="trend positive">Avg</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card card">
                    <div className="stat-icon-wrapper text-cyan">
                        <Layers size={24} />
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">Top Mode Used</span>
                        <div className="stat-value">
                            <h3>Visual</h3>
                            <span className="trend">Impairment</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="charts-section">
                <div className="main-chart card">
                    <div className="chart-header">
                        <h3>Adaptation Effectiveness Over Time</h3>
                        <div className="chart-legend">
                            <span className="legend-item"><span className="dot dot-cyan"></span> Standard Curriculum</span>
                            <span className="legend-item"><span className="dot dot-purple"></span> Adapted Curriculum</span>
                        </div>
                    </div>

                    <div className="chart-area flex-center">
                        {/* Mock Line Chart UI using CSS */}
                        <div className="mock-chart-container">
                            <div className="y-axis">
                                <span>100</span>
                                <span>75</span>
                                <span>50</span>
                                <span>25</span>
                                <span>0</span>
                            </div>
                            <div className="chart-grid">
                                <div className="grid-line"></div>
                                <div className="grid-line"></div>
                                <div className="grid-line"></div>
                                <div className="grid-line"></div>
                                <div className="grid-line"></div>

                                {/* SVG Mock Line Chart */}
                                <svg viewBox="0 0 100 50" className="mock-svg-chart" preserveAspectRatio="none">
                                    {/* Standard Curve */}
                                    <path
                                        d="M0,45 Q10,40 20,42 T40,35 T60,38 T80,30 T100,32"
                                        fill="none"
                                        stroke="rgba(0, 240, 255, 0.4)"
                                        strokeWidth="1.5"
                                        className="path-standard"
                                    />
                                    {/* Adapted Curve */}
                                    <path
                                        d="M0,45 Q10,35 20,30 T40,20 T60,15 T80,10 T100,5"
                                        fill="none"
                                        stroke="url(#purpleGradient)"
                                        strokeWidth="2.5"
                                        className="path-adapted"
                                    />

                                    <defs>
                                        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#8b5cf6" />
                                            <stop offset="100%" stopColor="#d946ef" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Data Points for Adapted Path */}
                                <div className="data-point" style={{ left: '20%', bottom: '40%' }}>
                                    <div className="tooltip">Students using adapted modes showed higher quiz accuracy (+10%)</div>
                                </div>
                                <div className="data-point" style={{ left: '60%', bottom: '70%' }}>
                                    <div className="tooltip">Project Assessment (+25%)</div>
                                </div>
                                <div className="data-point" style={{ left: '100%', bottom: '90%' }}>
                                    <div className="tooltip">Final Integration (+32%)</div>
                                </div>
                            </div>
                            <div className="x-axis">
                                <span>Week 1</span>
                                <span>Week 4</span>
                                <span>Week 8</span>
                                <span>Week 12</span>
                                <span>Week 16</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feedback-card card">
                    <div className="chart-header">
                        <h3>Attention Support Signals</h3>
                    </div>
                    <p className="text-secondary text-sm mb-4">
                        Aggregated demo insights collected from the optional engagement sensing prototype.
                    </p>

                    <div className="signal-list">
                        <div className="signal-item">
                            <div className="signal-icon info">
                                <Eye size={16} />
                            </div>
                            <div className="signal-content">
                                <h4>High contrast mode usage</h4>
                                <p>High contrast mode successfully used by 3 students.</p>
                            </div>
                        </div>

                        <div className="signal-item">
                            <div className="signal-icon info">
                                <Layers size={16} />
                            </div>
                            <div className="signal-content">
                                <h4>Caption and large text activity</h4>
                                <p>Caption mode active for 2 students. 1 student switched to large text mode mid-lesson.</p>
                            </div>
                        </div>

                        <div className="signal-item">
                            <div className="signal-icon warning">
                                <Camera size={16} />
                            </div>
                            <div className="signal-content">
                                <h4>Focus fluctuation detected</h4>
                                <p>Attention dropped during diagram explanation. Consider breaking down the next complex visual.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceMonitor;
