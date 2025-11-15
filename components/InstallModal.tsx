
import React from 'react';
import { X } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">インストール方法</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">iPhone (Safari)</h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-700">
              <li>画面下部の「共有」アイコンをタップします。</li>
              <li>「ホーム画面に追加」を選択します。</li>
              <li>「追加」をタップして完了です。</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">Android (Chrome)</h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-700">
              <li>右上のメニューアイコン（︙）をタップします。</li>
              <li>「ホーム画面に追加」または「アプリをインストール」を選択します。</li>
              <li>「追加」をタップして完了です。</li>
            </ol>
          </div>
        </div>
        
        <button 
          onClick={onClose} 
          className="mt-6 w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
        >
          閉じる
        </button>
      </div>
    </div>
  );
};

export default InstallModal;
   