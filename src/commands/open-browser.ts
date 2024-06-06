import { Command } from "@tauri-apps/plugin-shell";

export async function openBrowser(url: string) {
  try {
    const command = Command.create("exec-open", [url]);
    await command.execute();
  } catch (e) {
    console.error("Failed to open URL in browser:", e);
  }
}
