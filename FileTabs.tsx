import React, { useRef } from 'react';
import { FileText, Headphones, Video, Upload, Eye, ExternalLink, Play, Download } from 'lucide-react';
import { motion } from 'framer-motion';
interface FileItem {
  id: string;
  name: string;
  description: string;
  type: string;
  size: string;
  file?: File;
  url?: string;
}
interface FileTabsProps {
  activeTab: 'documents' | 'audio' | 'video';
  onTabChange: (tab: 'documents' | 'audio' | 'video') => void;
  files: FileItem[];
  onFileUpload: (files: FileList | null, category: 'documents' | 'audio' | 'video') => void;
}

// @component: FileTabs
export const FileTabs = ({
  activeTab,
  onTabChange,
  files,
  onFileUpload
}: FileTabsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const tabs = [{
    id: 'documents',
    label: 'Documents',
    icon: FileText,
    description: 'Project files & documentation'
  }, {
    id: 'audio',
    label: 'Audio',
    icon: Headphones,
    description: 'Audio recordings & files'
  }, {
    id: 'video',
    label: 'Video',
    icon: Video,
    description: 'Video content & presentations'
  }] as any[];
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFileUpload(e.target.files, activeTab);
    if (e.target) e.target.value = '';
  };
  const getAcceptedTypes = () => {
    switch (activeTab) {
      case 'documents':
        return '.pdf,.doc,.docx,.txt,.xlsx,.xls';
      case 'audio':
        return '.mp3,.wav,.ogg,.m4a';
      case 'video':
        return '.mp4,.mov,.avi,.webm';
      default:
        return '';
    }
  };

  // @return
  return <div className="space-y-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
        <div className="flex flex-col md:flex-row gap-2">
          {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return <button key={tab.id} onClick={() => onTabChange(tab.id as any)} className={`flex-1 flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-50'}`}>
                <Icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">{tab.label}</div>
                  <div className={`text-sm ${isActive ? 'text-pink-100' : 'text-gray-500'}`}>
                    {tab.description}
                  </div>
                </div>
              </button>;
        })}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeTab}</h2>
          <button onClick={handleUploadClick} className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors">
            <Upload className="w-4 h-4" />
            <span>Upload Files</span>
          </button>
        </div>

        <input ref={fileInputRef} type="file" multiple accept={getAcceptedTypes()} onChange={handleFileChange} className="hidden" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map(file => <motion.div key={file.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{file.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{file.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{file.type}</span>
                    <span>{file.size}</span>
                  </div>
                </div>
              </div>

              {activeTab === 'audio' && file.url && <audio controls className="w-full mb-4">
                  <source src={file.url} />
                </audio>}

              {activeTab === 'video' && file.url && <video controls className="w-full mb-4 rounded-lg">
                  <source src={file.url} />
                </video>}

              <div className="flex gap-2">
                <button className="flex items-center gap-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                  <Eye className="w-3 h-3" />
                  <span>View</span>
                </button>
                <button className="flex items-center gap-1 border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  <span>Open Link</span>
                </button>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
};