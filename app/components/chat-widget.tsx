"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react"
import ReactMarkdown from "react-markdown"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Halo! 👋 Selamat datang di Zee Demo Travel. Saya Gemini AI, asisten virtual Anda. Ada yang bisa saya bantu untuk merencanakan perjalanan impian Anda?",
      sender: "cs",
      time: "10:30",
    },
  ])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setMessage("")
      setIsTyping(true)

      try {
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        })
        const data = await res.json()
        
        // Simulasi typing delay
        setTimeout(() => {
          const aiResponse = {
            id: messages.length + 2,
            text: data.text || "Maaf, terjadi kesalahan. Silakan coba lagi.",
            sender: "cs",
            time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
          }
          setMessages((prev) => [...prev, aiResponse])
          setIsTyping(false)
        }, 1500)
      } catch {
        setTimeout(() => {
          const errorMessage = {
            id: messages.length + 2,
            text: "Maaf, koneksi bermasalah. Silakan coba lagi dalam beberapa saat.",
            sender: "cs",
            time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
          }
          setMessages((prev) => [...prev, errorMessage])
          setIsTyping(false)
        }, 1500)
      }
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50"></div>
            
            <Button
              onClick={() => setIsOpen(true)}
              className="relative h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl transform hover:scale-110 transition-all duration-300 group"
            >
              <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-bounce"></span>
              
              {/* Floating notification */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                💬 Chat dengan AI Assistant
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </Button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 animate-in slide-in-from-bottom-5 duration-300">
          <Card className="shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                      Gemini AI Assistant
                      <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
                    </CardTitle>
                    <p className="text-xs text-green-300 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online • Siap Membantu
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-blue-50/50 to-white">
                {messages.map((msg, index) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-300`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex items-end gap-2 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.sender === "user" 
                          ? "bg-gradient-to-r from-blue-500 to-blue-600" 
                          : "bg-gradient-to-r from-purple-500 to-pink-500"
                      }`}>
                        {msg.sender === "user" ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      
                      {/* Message Bubble */}
                      <div className={`relative p-3 rounded-2xl shadow-sm ${
                        msg.sender === "user" 
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md" 
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                      }`}>
                        <div className="text-sm leading-relaxed prose prose-sm max-w-none prose-headings:text-inherit prose-p:text-inherit prose-strong:text-inherit prose-em:text-inherit prose-code:text-inherit prose-pre:text-inherit prose-blockquote:text-inherit prose-ul:text-inherit prose-ol:text-inherit prose-li:text-inherit prose-a:text-inherit">
                          <ReactMarkdown>
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                        <p className={`text-xs mt-2 opacity-70 ${
                          msg.sender === "user" ? "text-blue-100" : "text-gray-500"
                        }`}>
                          {msg.time}
                        </p>
                        
                        {/* Message tail */}
                        <div className={`absolute bottom-0 w-3 h-3 ${
                          msg.sender === "user" 
                            ? "right-0 bg-blue-600 transform rotate-45 translate-x-1 translate-y-1" 
                            : "left-0 bg-white border-l border-b border-gray-200 transform rotate-45 -translate-x-1 translate-y-1"
                        }`}></div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-end gap-2 max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-md shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex gap-3 items-end">
                  <div className="flex-1">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ketik pesan Anda..."
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl text-sm py-3 px-4 resize-none"
                      onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                      disabled={isTyping}
                    />
                  </div>
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!message.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Quick Actions */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  <button 
                    onClick={() => setMessage("Paket wisata apa saja yang tersedia?")}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-200"
                  >
                    🏖️ Paket Wisata
                  </button>
                  <button 
                    onClick={() => setMessage("Berapa harga rental mobil?")}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-200"
                  >
                    🚗 Rental Mobil
                  </button>
                  <button 
                    onClick={() => setMessage("Bagaimana cara booking?")}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-200"
                  >
                    📞 Cara Booking
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
