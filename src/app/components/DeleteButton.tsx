// このコンポーネントはサーバーコンポーネントではなくクライアントコンポーネントとして定義
"use client";
import React from 'react'
// import { deleteArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
type DeleteButtonProps = {
        id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
        const router = useRouter();
        const handleDelete = async () => {
                // await deleteArticle(id);

                const API_URL = process.env.NEXT_PUBLIC_API_URL;
                await fetch(`${API_URL}/api/${id}`, {
                        method: "DELETE",
                });
                router.push("/");
                // 現在のページのデータを**再取得（リフレッシュ）
                // APIでデータを更新・削除した後、最新の状態を表示したいときに使う
                router.refresh();
        }

        return (
                <div className="bg-red-500 hover:bg-red-600 rounded-md font-bold py-2 px-5 inline cursor-pointer"
                        onClick={handleDelete}>
                        削除
                </div>
        )
}

export default DeleteButton