import { useState } from 'react';
import {
  BookOpen,
  Settings,
  BarChart3,
  Bell,
  Search,
  Wand2
} from 'lucide-react';
import './App.css';

// Placeholder components - will be implemented in separate files
import UploadCurriculum from './components/UploadCurriculum';
import AIAdaptationDemo from './components/AIAdaptationDemo';
import PerformanceMonitor from './components/PerformanceMonitor';

function App() {
  const [activeTab, setActiveTab] = useState('upload');

  const renderContent = () => {
    switch (activeTab) {
      case 'upload':
        return <UploadCurriculum onUploadComplete={() => setActiveTab('adaptations')} />;
      case 'adaptations':
        return <AIAdaptationDemo />;
      case 'performance':
        return <PerformanceMonitor />;
      default:
        return <UploadCurriculum onUploadComplete={() => setActiveTab('adaptations')} />;
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'upload': return 'Curriculum Upload';
      case 'adaptations': return 'AI Adaptations Review';
      case 'performance': return 'Class Performance';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo-container">
          <BookOpen className="logo-icon" size={28} />
          <span className="logo-text">LearnAble</span>
        </div>

        <nav className="nav-menu">
          <div
            className={`nav-item ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            <Settings size={20} />
            <span>Preparation</span>
          </div>

          <div
            className={`nav-item ${activeTab === 'adaptations' ? 'active' : ''}`}
            onClick={() => setActiveTab('adaptations')}
          >
            <Wand2 size={20} />
            <span>AI Review</span>
          </div>

          <div
            className={`nav-item ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            <BarChart3 size={20} />
            <span>Performance</span>
          </div>
        </nav>

        <div className="user-profile">
          <div className="avatar">T</div>
          <div className="user-info">
            <span className="user-name">Ms. Sarah Jenkins</span>
            <span className="user-role">Lead Teacher</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="top-header">
          <h1 className="page-title">{getPageTitle()}</h1>

          <div className="header-actions">
            <button className="icon-button">
              <Search size={20} />
            </button>
            <button className="icon-button">
              <Bell size={20} />
            </button>
          </div>
        </header>

        <div className="content-container animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
