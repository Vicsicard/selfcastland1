import React from 'react';

export default function DashboardMockup() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-500">Self Cast Dashboard</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-gray-100 p-3 rounded-md">
          <div className="font-semibold text-sm mb-2">Content Types</div>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>Bio/About</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>Blog Posts</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span>Social Media</span>
            </li>
          </ul>
        </div>
        
        <div className="col-span-2 space-y-3">
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="font-semibold text-sm mb-1">Blog Post</div>
            <div className="h-2 bg-gray-300 rounded-full w-3/4"></div>
            <div className="h-2 bg-gray-300 rounded-full w-1/2 mt-1"></div>
          </div>
          
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="font-semibold text-sm mb-1">Social Post</div>
            <div className="h-2 bg-gray-300 rounded-full w-full"></div>
            <div className="h-2 bg-gray-300 rounded-full w-2/3 mt-1"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="bg-accent text-xs py-1 px-3 rounded text-primary font-semibold">Publish</button>
      </div>
    </div>
  );
}
