// src/Pages/Admin/AdminCommunication.jsx
import React, { useState } from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function AdminCommunication() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const [inbox, setInbox] = useState([
    { id: 1, from: "client1@example.com", subject: "Pricing query", body: "Hi, share pricing details.", date: "2025-01-10", read: false },
    { id: 2, from: "lead@example.com", subject: "Request a demo", body: "Can I have a demo on Tuesday?", date: "2025-01-09", read: true },
  ]);
  const [selected, setSelected] = useState(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [compose, setCompose] = useState({ to: "", subject: "", body: "" });
  const [filter, setFilter] = useState("all");

  const openMessage = (msg) => {
    setSelected(msg);
    setInbox(inbox.map(i => i.id === msg.id ? { ...i, read: true } : i));
  };

  const deleteMessage = (id) => {
    setInbox(inbox.filter(m => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const sendMessage = () => {
    // Simulate sending — push to inbox as sent (or to inbox as new message)
    const newMsg = {
      id: Math.max(0, ...inbox.map(i => i.id)) + 1,
      from: compose.to,
      subject: compose.subject || "(no subject)",
      body: compose.body,
      date: new Date().toISOString().split("T")[0],
      read: false,
    };
    setInbox([newMsg, ...inbox]);
    setCompose({ to: "", subject: "", body: "" });
    setComposeOpen(false);
  };

  const filtered = inbox.filter(m => filter === "all" ? true : filter === "unread" ? !m.read : m.read);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onClose={() => setMobileSidebarOpen(false)}
        mobile={mobileSidebarOpen}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-16 lg:ml-20' : 'md:ml-2'}`}>
        {/* Navbar */}
        <Navbar
          onToggleSidebar={toggleSidebar}
          onToggleDesktopSidebar={toggleDesktopSidebar}
          isDesktopSidebarCollapsed={sidebarCollapsed}
        />

        {/* Communication Content */}
        <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Communication</h1>
          <p className="text-sm text-slate-500">Inbox, compose and message history</p>
        </div>

        <div className="flex items-center gap-2">
          <select className="p-2 border rounded-lg" value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>

          <button onClick={() => setComposeOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Compose</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Inbox list */}
        <div className="md:col-span-1 bg-white rounded-xl shadow p-3 overflow-auto max-h-[62vh]">
          <div className="text-sm text-slate-500 mb-3">Inbox ({filtered.length})</div>
          <ul>
            {filtered.map(msg => (
              <li key={msg.id} className={`p-3 rounded-lg mb-2 cursor-pointer ${selected?.id === msg.id ? "bg-purple-50" : "hover:bg-gray-50"}`} onClick={() => openMessage(msg)}>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-slate-800">{msg.subject}</div>
                    <div className="text-xs text-slate-500">{msg.from} • {msg.date}</div>
                  </div>
                  {!msg.read && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                </div>
              </li>
            ))}
            {filtered.length === 0 && <li className="p-3 text-sm text-slate-400">No messages</li>}
          </ul>
        </div>

        {/* Message view */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-4 min-h-[62vh]">
          {!selected ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <div className="text-lg font-medium">Select a message</div>
              <div className="text-sm mt-2">or click Compose to send one.</div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold">{selected.subject}</div>
                  <div className="text-xs text-slate-500">{selected.from} • {selected.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => deleteMessage(selected.id)} className="text-red-600 hover:text-red-800">Delete</button>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-700 whitespace-pre-line">{selected.body}</div>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button onClick={() => setComposeOpen(true)} className="bg-indigo-600 text-white px-3 py-2 rounded-lg">Reply</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Compose Modal (simple) */}
      {composeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setComposeOpen(false)} />
          <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Compose Message</h3>
              <button onClick={() => setComposeOpen(false)} className="text-slate-500">Close</button>
            </div>

            <div className="grid gap-3">
              <input value={compose.to} onChange={e => setCompose({ ...compose, to: e.target.value })} placeholder="To (email)" className="p-2 border rounded-lg" />
              <input value={compose.subject} onChange={e => setCompose({ ...compose, subject: e.target.value })} placeholder="Subject" className="p-2 border rounded-lg" />
              <textarea value={compose.body} onChange={e => setCompose({ ...compose, body: e.target.value })} rows={8} placeholder="Write your message..." className="p-2 border rounded-lg" />
              <div className="flex justify-end gap-2">
                <button onClick={() => setCompose({ to: "", subject: "", body: "" })} className="px-4 py-2 rounded-lg border">Clear</button>
                <button onClick={sendMessage} className="px-4 py-2 rounded-lg bg-green-600 text-white">Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
