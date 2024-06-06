import { fetch } from "@tauri-apps/plugin-http";
import * as cheerio from "cheerio";
import { PodcastPageProps } from "./types";

export async function getPodcastPageProps(url: string) {
  const response = await fetch(url, {
    method: "GET",
  });
  const html = await response.text();
  const data = getNextData(html);
  return data;
}

export function getNextData(html: string): PodcastPageProps {
  const $ = cheerio.load(html);
  const text = $("#__NEXT_DATA__").text();
  return JSON.parse(text);
}
