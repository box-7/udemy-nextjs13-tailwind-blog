import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Article } from '@/types'

type ArticleCardProps = {
        article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
        return (
                <article className="flex flex-col shadow my-4" key={article.id}>
                        <Link href={`articles/${article.id}`} className="hover:opacity-75">
                                <Image
                                        src={`https://picsum.photos/seed/${article.id}/1000/500`}
                                        alt=""
                                        width={1280}
                                        height={300}
                                        className="object-cover"
                                        priority
                                />
                        </Link>
                        <div className="bg-white flex flex-col justify-start p-6">
                                <Link href="#"
                                        className="text-blue-700 text-sm font-bold uppercase pb-4"
                                >Technology</Link>

                                <Link href={`articles/${article.id}`}
                                        className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
                                >{article.title}</Link>

                                <p className="text-sm pb-3 text-slate-900">Published on {article.createdAt}</p>

                                <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
                                        {article.content.length > 70 ? article.content.substring(0, 70) + "..." : article.content}
                                </Link>
                                <Link href={`articles/${article.id}`} className="text-pink-800 hover:text-black">続きを読む</Link>
                        </div>
                </article>
        )
}

export default ArticleCard