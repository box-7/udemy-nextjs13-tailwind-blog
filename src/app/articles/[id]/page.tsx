// r: React
// a: Arrow（アロー関数）
// f: Function（関数）
// c: Component（コンポーネント）
// e: Export（エクスポート）
import Image from "next/image";
import React from 'react'

const Article = ({ params }: { params: { id: string } }) => {
        console.log("params", params);
        return (
        <div className="max-w-3xl mx-auto p-5">
                <Image
                        src="https://picsum.photos/seed/picsum/1280/300"
                        alt=""
                        width={1280}
                        height={300}
                        className="object-cover"
                />
                <h1 className="text-4xl text-center mb-10 mt-10">タイトル</h1>
                <div className="text-lg leading-relaxed text-justify">
                        <p>本文</p>
                </div>
        </div>
        );
}

export default Article;

