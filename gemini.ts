import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function talk(query: string): Promise<string> {
	try {
		const res = await ai.models.generateContent({
			model: "gemini-2.5-flash-lite",
			contents: query,
		});
		if (!res || !res.text) {
			return "No response from Gemini API.";
		}

		return res.text;
	} catch (err) {
		console.error("Error calling Gemini API:", err);
		return "An error occurred while processing your request.";
	}
}
