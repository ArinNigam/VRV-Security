import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { FileText, Upload, FolderPlus, Search, MoreVertical } from 'lucide-react';

export const Documents: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const mockDocuments = [
    { name: 'Project Proposal.pdf', type: 'PDF', size: '2.4 MB', modified: '2024-03-15' },
    { name: 'Meeting Notes.docx', type: 'Word', size: '1.1 MB', modified: '2024-03-14' },
    { name: 'Budget Report.xlsx', type: 'Excel', size: '3.2 MB', modified: '2024-03-13' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Documents
          </h1>
        </div>
        <div className="flex gap-3">
          <button className={`flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${isDarkMode ? 'hover:bg-blue-500' : ''}`}>
            <Upload size={20} />
            Upload
          </button>
          <button className={`flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-600' : ''}`}>
            <FolderPlus size={20} />
            New Folder
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="search"
            placeholder="Search documents..."
            className={`w-full pl-10 pr-4 py-2 rounded-md ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 hover:bg-gray-600'
                : 'bg-white text-gray-900 placeholder-gray-500 hover:bg-gray-100'
            } border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}
          />
        </div>
      </div>

      <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Modified</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {mockDocuments.map((doc, index) => (
              <tr key={index} className={isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    <span>{doc.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.size}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.modified}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className={`text-gray-400 hover:text-gray-500 ${isDarkMode ? 'hover:text-gray-300' : ''}`}>
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};