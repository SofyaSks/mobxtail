
export const HomePage=()=>{
    return(
    <div className="min-h-screen bg-[#f5f6fa] text-[#2d3436]">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-100 px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="logo text-[#6c5ce7] text-2xl font-bold">
            Oblaca <div className="text-sm text-[#636e72] ml-2 font-normal">powered by pivnoispec</div>
          </div>
          
          <ul className="flex gap-8 list-none">
            <li>
              <a href="/dashboard" className="no-underline text-[#2d3436] font-medium hover:text-[#6c5ce7] transition-colors">
                Главная
              </a>
            </li>
            <li>
              <a href="/settings" className="no-underline text-[#2d3436] font-medium hover:text-[#6c5ce7] transition-colors">
                Настройки
              </a>
            </li>
          </ul>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#a29bfe] flex items-center justify-center text-white font-bold">
              ИП
            </div>
            <a 
              href="/" 
              className="px-4 py-2 text-sm font-semibold rounded-md border-2 border-[#6c5ce7] text-[#6c5ce7] bg-transparent hover:bg-[#6c5ce7] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-1"
            >
              Выйти
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto my-8 px-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-[#2d3436]">Добро пожаловать!</h1>
          <p className="text-[#636e72] text-base">Управляйте вашими файлами и документами</p>
        </div>

        {/* Message Container */}
        <div id="messageContainer" className="mb-5"></div>

        {/* File Upload Section */}
        <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-6">
          <h2 className="text-xl mb-5 text-[#2d3436]">Загрузка файлов</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center cursor-pointer transition-all mb-4 hover:border-[#6c5ce7] hover:bg-[rgba(108,92,231,0.05)] active:border-[#6c5ce7] active:bg-[rgba(108,92,231,0.1)]">
            <div className="text-4xl text-[#6c5ce7] mb-3">📁</div>
            <p className="text-base mb-1">Перетащите файлы сюда или нажмите для выбора</p>
            <p className="text-[#636e72] text-sm">Максимальный размер файла: 100 МБ</p>
            <input type="file" className="hidden" multiple />
          </div>
          
          <div className="file-list mt-5" id="fileList"></div>
        </div>

        {/* File Preview Section */}
        <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-6">
          <h2 className="text-xl mb-5 text-[#2d3436]">Просмотр файла</h2>
          
          <div className="file-preview hidden mt-6 border border-gray-200 rounded-md p-6">
            <div className="preview-header flex justify-between items-center mb-5 pb-3 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[#2d3436]">Выберите файл для просмотра</h3>
            </div>
            
            <div className="preview-content min-h-[300px] flex flex-col items-center justify-center gap-3">
              <div className="text-5xl text-[#6c5ce7]">📄</div>
              <p>Выберите файл из списка ниже для просмотра</p>
            </div>
            
            {/* File Info Details */}
            <div className="file-info-details hidden mt-5 p-5 bg-gray-50 rounded-md">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
                <div className="info-item flex flex-col gap-1">
                  <div className="text-xs text-[#636e72] font-medium">Размер:</div>
                  <div className="font-semibold text-[#2d3436]" id="infoSize">-</div>
                </div>
                <div className="info-item flex flex-col gap-1">
                  <div className="text-xs text-[#636e72] font-medium">Тип:</div>
                  <div className="font-semibold text-[#2d3436]" id="infoType">-</div>
                </div>
                <div className="info-item flex flex-col gap-1">
                  <div className="text-xs text-[#636e72] font-medium">Расширение:</div>
                  <div className="font-semibold text-[#2d3436]" id="infoExtension">-</div>
                </div>
                <div className="info-item flex flex-col gap-1">
                  <div className="text-xs text-[#636e72] font-medium">Дата изменения:</div>
                  <div className="font-semibold text-[#2d3436]" id="infoModified">-</div>
                </div>
                <div className="info-item flex flex-col gap-1">
                  <div className="text-xs text-[#636e72] font-medium">Статус:</div>
                  <div className="font-semibold text-[#2d3436]" id="infoStatus">-</div>
                </div>
              </div>
            </div>
            
            {/* Preview Actions */}
            <div className="preview-actions hidden gap-3 justify-center mt-6 flex-wrap">
              <button className="px-4 py-2 text-sm font-semibold rounded-md bg-[#6c5ce7] text-white hover:bg-[#5b4bd4] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(108,92,231,0.3)] transition-all duration-300 inline-flex items-center justify-center gap-1">
                Скачать
              </button>
              <button className="px-4 py-2 text-sm font-semibold rounded-md bg-[#d63031] text-white hover:bg-[#c23616] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(214,48,49,0.3)] transition-all duration-300 inline-flex items-center justify-center gap-1">
                Удалить
              </button>
            </div>
          </div>
        </div>

        {/* Recent Files Section */}
        <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <h2 className="text-xl mb-5 text-[#2d3436]">Мои файлы</h2>
          
          <div className="files-list flex flex-col gap-2" id="recentFilesList">
            <div className="file-row flex justify-between items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-[rgba(108,92,231,0.05)] last:border-b-0">
              <div className="file-row-info flex items-center gap-3">
                <div className="file-row-icon text-xl text-[#6c5ce7] w-6 text-center">📄</div>
                <div className="file-row-name font-medium">example.txt</div>
              </div>
              <div className="file-row-details flex gap-4 items-center">
                <div className="file-row-size text-[#636e72] text-sm">1.2 МБ</div>
                <div className="file-row-date text-[#636e72] text-sm">2024-01-15</div>
              </div>
            </div>
            
            <div className="file-row flex justify-between items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-[rgba(108,92,231,0.05)] last:border-b-0">
              <div className="file-row-info flex items-center gap-3">
                <div className="file-row-icon text-xl text-[#6c5ce7] w-6 text-center">🖼️</div>
                <div className="file-row-name font-medium">photo.jpg</div>
              </div>
              <div className="file-row-details flex gap-4 items-center">
                <div className="file-row-size text-[#636e72] text-sm">3.5 МБ</div>
                <div className="file-row-date text-[#636e72] text-sm">2024-01-14</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Стили для дополнительных классов, которые не покрывает Tailwind */}
      <style>{`
        .loading {
          opacity: 0.7;
          pointer-events: none;
        }
        
        .file-type-badge {
          background-color: #6c5ce7;
          color: white;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 500;
        }
        
        .loading-spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #6c5ce7;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 2s linear infinite;
          margin: 0 auto;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .message {
          padding: 0.8rem;
          border-radius: 6px;
          margin-bottom: 1.2rem;
        }
        
        .error-message {
          background-color: rgba(214, 48, 49, 0.1);
          color: #d63031;
          border: 1px solid rgba(214, 48, 49, 0.2);
        }
        
        .success-message {
          background-color: rgba(0, 184, 148, 0.1);
          color: #00b894;
          border: 1px solid rgba(0, 184, 148, 0.2);
        }
      `}</style>
    </div>
    )
}