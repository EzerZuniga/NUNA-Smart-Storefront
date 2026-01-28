import { useEffect, useMemo, useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { products } from '../../data/mockData';

const openingMessage = {
  text:
    '¡Hola! Soy Nuna, tu asistente multidepartamento. Puedo contarte sobre Ropa sostenible, Gadgets conscientes y Accesorios con propósito. Recuerda: Lima 24-48h, Provincias 3-5 días vía Olva/Shalom.',
  sender: 'bot'
};

const formatCurrency = (amount) => `S/ ${amount.toFixed(2)}`;

export default function ChatNuna() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([openingMessage]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setMessages([openingMessage]);
    }
  }, [isOpen]);

  const catalogByKeyword = useMemo(
    () => ({
      ropa: products.filter((p) => p.category === 'Ropa'),
      gadget: products.filter((p) => p.category === 'Gadgets'),
      accesorios: products.filter((p) => p.category === 'Accesorios')
    }),
    []
  );

  const buildResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('envio') || lower.includes('envío')) {
      return 'Gestiono envíos express: Lima 24-48h y Provincias 3-5 días con Olva o Shalom. Empaques compostables y seguimiento en tiempo real.';
    }
    if (lower.includes('ropa')) {
      const [item] = catalogByKeyword.ropa;
      return `Nuestra Ropa sostenible incluye ${item.name} trabajado en ${item.materials?.join(', ')}. ${item.sustainability}. Precio ${formatCurrency(item.price)}.`;
    }
    if (lower.includes('gadget') || lower.includes('tecnolog')) {
      const [item] = catalogByKeyword.gadget;
      return `${item.name} ofrece ${item.specs?.join(', ')}. Durabilidad: ${item.durability}. Precio ${formatCurrency(item.price)}.`;
    }
    if (lower.includes('accesorio') || lower.includes('gourmet')) {
      const [item] = catalogByKeyword.accesorios;
      return `${item.name} destaca por ${item.sustainability}. Durabilidad: ${item.durability}. Precio ${formatCurrency(item.price)}.`;
    }
    if (lower.includes('recibo')) {
      return 'Al finalizar tu compra genero un Recibo de Compra Premium con desglose en soles y sello de comercio justo.';
    }
    return 'Puedo ayudarte con detalles de Ropa, Gadgets, Accesorios o logística. Dime qué categoría quieres explorar y te guío.';
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const reply = buildResponse(trimmed);
    setMessages((prev) => [
      ...prev,
      { text: trimmed, sender: 'user' },
      { text: reply, sender: 'bot' }
    ]);
    setInput('');
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="chat-button" variant="primary">
        <span className="chat-button-icon" aria-hidden="true">
          <svg className="chat-handshake-icon" viewBox="0 0 24 24" role="presentation">
            <defs>
              <linearGradient id="chatHandshakeGradient" x1="3" y1="6" x2="21" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffe29f" />
                <stop offset="1" stopColor="#ffb065" />
              </linearGradient>
            </defs>
            <path
              d="M4 9.5h3.1a1.8 1.8 0 0 1 1.27.53l3.72 3.72"
              fill="none"
              stroke="url(#chatHandshakeGradient)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.7 11.3 12.36 13.96a1.7 1.7 0 0 0 2.4 0l1.3-1.3a1.7 1.7 0 0 0 0-2.4l-3.1-3.1"
              fill="none"
              stroke="url(#chatHandshakeGradient)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3 7h2.8a2 2 0 0 1 1.4.59l2.2 2.2a2 2 0 0 1 0 2.82l-5.1 5.1a2.4 2.4 0 0 1-3.34 0l-4.73-4.73a1.8 1.8 0 0 0-1.27-.53H3.2"
              fill="none"
              stroke="url(#chatHandshakeGradient)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.2 15.3 9.7 13.8"
              fill="none"
              stroke="url(#chatHandshakeGradient)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8 17.3 12.1 16"
              fill="none"
              stroke="url(#chatHandshakeGradient)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="chat-button-label">Conversa con Nuna</span>
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Nuna – Smart Storefront">
        <div className="chat-container">
          <div className="messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Pregúntame por categorías, envíos o recibos"
            />
            <Button onClick={sendMessage}>Enviar</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
