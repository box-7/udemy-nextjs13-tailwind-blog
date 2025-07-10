import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ArticleList = () => {
        return (
                <div>
                        <article>
                                <Link href="#">

                                        <Image
                                                // src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                                                src="https://placehold.jp/150x150.png"
                                                alt=""
                                                width={1280}
                                                height={300}
                                        />
                                </Link>
                                <div>
                                        <Link href="#">Technology</Link>
                                        <Link href="#">Next.jsの勉強中</Link>
                                        <p>By shindode, Published on 2023/07/15</p>
                                        <Link href="#" className="pb-6">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
                                                iaculis dui porta volutpat. In sit amet posuere magna..
                                        </Link>
                                        <Link href="#">続きを読む</Link>
                                </div>
                        </article>

                        ArticleList</div>
        )
}

export default ArticleList