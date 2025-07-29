import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
        // SSR（Server Side Rendering）
        // サーバー側でページを生成し、最新のデータを毎回取得して表示できる。
        // 「1日に何回も更新されるブログサイト」など、常に新しい情報を見せたい場合に向いている。
        const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" });
        if (!res.ok) {
                throw new Error("Failed to fetch articles");
        }

        // resolveは「このPromiseは終わりました」と通知するための関数
        await new Promise(resolve => setTimeout(resolve, 1000));

        const artilcles = await res.json();
        return artilcles;
}

export const getDetailArticle = async (id: string): Promise<Article> => {
        // ISR（Incremental Static Regeneration）
        // 静的生成（SSG）と動的生成（SSR）の中間のような仕組み
        // ビルド時に静的HTMLを生成し、一定時間ごとにサーバー側で再生成できる
        // ユーザーは高速な静的ページを見られつつ、定期的に最新データに自動更新される
        const res = await fetch(`http://localhost:3001/posts/${id}`, {
                next: { revalidate: 60 }, // 60秒ごとに再生成
        });

        if (res.status === 404) {
                notFound();
        }
        if (!res.ok) {
                throw new Error("Failed to fetch articles");
        }
        // resolveは「このPromiseは終わりました」と通知するための関数
        await new Promise(resolve => setTimeout(resolve, 1000));

        const artilcle = await res.json();
        return artilcle;
}


// CSR（Client Side Rendering）
// ブラウザ側（クライアント）でデータを取得して描画する。
// → 初回表示が遅くなりやすいが、動的な操作やSPAに向いている。
