// client/src/GeminiWithContext.jsx
import React, { useState } from "react";

export default function GeminiTester() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [includeContext, setIncludeContext] = useState(true);
  const [maxTokens, setMaxTokens] = useState(512);

  const send = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setReply("");
    try {
      const res = await fetch("http://localhost:3001/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPrompt: prompt,
          includeContext,
          maxOutputTokens: Number(maxTokens),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setReply("Error: " + (data?.error || JSON.stringify(data)));
      } else {
        setReply(data.reply || JSON.stringify(data.raw, null, 2));
      }
    } catch (err) {
      setReply("Fetch error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Gemini Tester — CryptoLance Context</h2>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Prompt</label>
          <textarea
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full border rounded p-3"
            placeholder="Ask the model something (it has the CryptoLance project brief as context)..."
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={includeContext} onChange={(e)=>setIncludeContext(e.target.checked)} />
            <span className="text-sm">Include CryptoLance project context</span>
          </label>

          <label className="ml-auto flex items-center gap-2">
            <span className="text-sm">Max tokens</span>
            <input type="number" value={maxTokens} onChange={(e)=>setMaxTokens(e.target.value)} className="w-20 border rounded p-1"/>
          </label>
        </div>

        <div className="flex gap-3">
          <button onClick={send} disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
            {loading ? "Sending..." : "Send"}
          </button>
          <button onClick={()=>{ setPrompt(""); setReply(""); }} className="px-4 py-2 border rounded">Clear</button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Model reply</h3>
          <pre className="p-4 bg-gray-100 rounded whitespace-pre-wrap">{reply || "No reply yet."}</pre>
        </div>
      </div>
    </div>
  );
}
