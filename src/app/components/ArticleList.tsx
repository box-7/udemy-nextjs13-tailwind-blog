import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Article } from '@/types'

type ArticleListProps = {
        articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
        return (
                <div>
                        {articles.map((article) => (
                                // <article key={article.id} className="flex flex-col shadow my-4"></article>
                                //         <Link href={`/articles/${article.id}`} className="hover:opacity-75">
                                <article className="flex flex-col shadow my-4" key={article.id}>
                                        <Link href={`articles/$article.id`} className="hover:opacity-75">
                                                <Image
                                                        src="https://picsum.photos/seed/picsum/1280/300"
                                                        alt=""
                                                        width={1280}
                                                        height={300}
                                                        className="object-cover"
                                                />
                                        </Link>
                                        <div className="bg-white flex flex-col justify-start p-6">
                                                <Link href="#"
                                                        className="text-blue-700 text-sm font-bold uppercase pb-4"
                                                >Technology</Link>

                                                <Link href={`articles/$article.id`}
                                                        className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
                                                >{article.title}</Link>

                                                <p className="text-sm pb-3 text-slate-900">Published on {article.createdAt}</p>

                                                <Link href={`articles/$article.id`} className="text-slate-900 pb-6">
                                                        {article.content}
                                                </Link>
                                                <Link href={`articles/$article.id`} className="text-pink-800 hover:text-black">続きを読む</Link>
                                        </div>
                                </article>

                                // <article className="flex flex-col shadow my-4">
                                //         <Link href="#" className="hover:opacity-75">
                                //                 <Image
                                //                         // src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                                //                         // src="https://placehold.jp/150x150.png"
                                //                         src="https://picsum.photos/1280/300/?blur"
                                //                         alt=""
                                //                         width={1280}
                                //                         height={300}
                                //                         className="object-cover"
                                //                 />
                                //         </Link>
                                //         <div className="bg-white flex flex-col justify-start p-6">

                                //                 <Link href="#"
                                //                         className="text-blue-700 text-sm font-bold uppercase pb-4"
                                //                 >Technology</Link>
                                //                 <Link href="#"
                                //                         className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
                                //                 >Next.jsの勉強中</Link>

                                //                 <p className="text-sm pb-3 text-slate-900">Published on 2023/07/15</p>
                                //                 <Link href="#" className="text-slate-900 pb-6">
                                //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                //                         quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
                                //                         iaculis dui porta volutpat. In sit amet posuere magna..
                                //                 </Link>
                                //                 <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
                                //         </div>
                                // </article>
                        ))}
                </div>
        )
}

export default ArticleList