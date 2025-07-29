// r: React
// a: Arrow（アロー関数）
// f: Function（関数）
// c: Component（コンポーネント）
// e: Export（エクスポート）

import Image from "next/image";
import React from 'react'
import { getDetailArticle } from "@/blogAPI";
import DeleteButton from "@/app/components/DeleteButton";

const Article = async ({ params }: { params: { id: string } }) => {
        const detailArticle = await getDetailArticle(params.id);

        // copilotのアドバイスだが直らず
        // const Article = async (props: { params: { id: string } }) => {
        // const { params } = await props;
        // const detailArticle = await getDetailArticle(params.id);
        return (
                <div className="max-w-3xl mx-auto p-5">
                        <Image
                                src={`https://picsum.photos/seed/${detailArticle.id}/1000/500`}
                                alt=""
                                width={1280}
                                height={300}
                                className="object-cover"
                                priority
                        />
                        <h1 className="text-4xl text-center mb-10 mt-10">{detailArticle.title}</h1>
                        <div className="text-lg leading-relaxed text-justify">
                                <p>{detailArticle.content}</p>
                        </div>

                        <div className="text-right mt-3">
                                <DeleteButton id={detailArticle.id} />
                        </div>
                </div>
        );
}

export default Article;

