// Script para limpar console e filtrar erros de extensões
// Execute no console do navegador durante o desenvolvimento

(function() {
  'use strict';
  
  // Limpa o console
  console.clear();
  
  // Filtra erros de extensões
  const originalError = console.error;
  const originalWarn = console.warn;
  
  console.error = function(...args) {
    const message = args.join(' ');
    if (!message.includes('contentScript') && 
        !message.includes('DefaultConnector') && 
        !message.includes('allowedOriginsToCommunicateWith')) {
      originalError.apply(console, args);
    }
  };
  
  console.warn = function(...args) {
    const message = args.join(' ');
    if (!message.includes('contentScript') && 
        !message.includes('DefaultConnector')) {
      originalWarn.apply(console, args);
    }
  };
  
  // Log de confirmação
  console.log('🔧 Console limpo! Erros de extensões filtrados.');
  console.log('💡 Dica: Use Ctrl+Shift+I para abrir DevTools limpo');
  
})();

