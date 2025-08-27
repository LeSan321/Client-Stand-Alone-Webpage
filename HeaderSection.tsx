import React from 'react';
import { Briefcase } from 'lucide-react';

// @component: HeaderSection
export const HeaderSection = () => {
  // @return
  return <div className="flex-1 space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            <span>Creative Project Portfolio</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600">
            <span className="font-medium">Future Vision</span>
            <span className="hidden md:block">•</span>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">PROJ-2024-001</span>
          </div>
        </div>
      </div>
      
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
        <span>Welcome to your project materials hub. Here you'll find all documents, audio files, and video content related to your project, organized for easy access and review.</span>
      </p>
    </div>;
};