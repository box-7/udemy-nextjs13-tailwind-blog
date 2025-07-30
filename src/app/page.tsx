// "use client"; // クライアントサイドで実行されるようになる

// import Image from "next/image";
// import { getAllArticles } from "@/blogAPI";
import ArticleList from "./components/ArticleList";

// import { supabase } from "@/utils/supabaseClient";

export default async function Home() {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
        if (!res.ok) {
                throw new Error("Failed to fetch articles");
        }
        const articles = await res.json();

        // console.log(articles);
        // ブラウザではなく、ローカルサーバーで確認できる
        // "use client"; を使うと、ブラウザで確認できる
        return (
                <>
                        <div className="md:flex" >
                                {/* 横幅の2/3のサイズ
                                        flex flex-col items-center は「縦並びのFlexboxで、子要素を中央揃えにする」*/}
                                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                                        <ArticleList articles={articles} />
                                </section>

                                {/* 横幅の1/3のサイズ */}
                                <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
                                        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
                                                <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
                                                <p className="text-gray-600">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        varius enim in eros elementum tristique.
                                                </p>
                                        </div>
                                        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
                                                <h3 className="font-bold text-gray-900 mb-2">Category</h3>
                                                <ul className="text-gray-600 mt-2">
                                                        <li>
                                                                <a href="#">Technology</a>
                                                        </li>
                                                        <li>
                                                                <a href="#">Automotive</a>
                                                        </li>
                                                        <li>
                                                                <a href="#">Finance</a>
                                                        </li>
                                                        <li>
                                                                <a href="#">Sports</a>
                                                        </li>
                                                </ul>
                                        </div>
                                </aside>
                        </div >
                </>
        );
}
