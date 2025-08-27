import React, { useState } from 'react';
import { HeaderSection } from './HeaderSection';
import { ContactInfoCard } from './ContactInfoCard';
import { FileTabs } from './FileTabs';
import { FooterSection } from './FooterSection';
interface FileItem {
  id: string;
  name: string;
  description: string;
  type: string;
  size: string;
  file?: File;
  url?: string;
}

// @component: ProjectPortfolioPage
export const ProjectPortfolioPage = () => {
  const [activeTab, setActiveTab] = useState<'documents' | 'audio' | 'video'>('documents');
  const [documents, setDocuments] = useState<FileItem[]>([{
    id: '1',
    name: 'Project Brief & Requirements',
    description: 'Comprehensive project overview and client requirements document',
    type: 'PDF',
    size: '2.4 MB'
  }, {
    id: '2',
    name: 'Design Specifications',
    description: 'Detailed design guidelines and technical specifications',
    type: 'Google Doc',
    size: '1.8 MB'
  }, {
    id: '3',
    name: 'Timeline & Milestones',
    description: 'Project timeline with key deliverables and milestones',
    type: 'Excel',
    size: '856 KB'
  }]);
  const [audioFiles, setAudioFiles] = useState<FileItem[]>([]);
  const [videoFiles, setVideoFiles] = useState<FileItem[]>([]);
  const handleFileUpload = (files: FileList | null, category: 'documents' | 'audio' | 'video') => {
    if (!files) return;
    const newFiles: FileItem[] = Array.from(files).map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: file.name.split('.')[0],
      description: `Uploaded ${file.type || 'file'}`,
      type: file.type || 'Unknown',
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      file,
      url: URL.createObjectURL(file)
    }));
    if (category === 'documents') {
      setDocuments(prev => [...prev, ...newFiles]);
    } else if (category === 'audio') {
      setAudioFiles(prev => [...prev, ...newFiles]);
    } else if (category === 'video') {
      setVideoFiles(prev => [...prev, ...newFiles]);
    }
  };
  const getCurrentFiles = () => {
    switch (activeTab) {
      case 'documents':
        return documents;
      case 'audio':
        return audioFiles;
      case 'video':
        return videoFiles;
      default:
        return [];
    }
  };

  // @return
  return <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-violet-400 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <HeaderSection />
          <ContactInfoCard />
        </div>
        
        <FileTabs activeTab={activeTab} onTabChange={setActiveTab} files={getCurrentFiles()} onFileUpload={handleFileUpload} />
        
        <FooterSection />
      </div>
    </div>;
};