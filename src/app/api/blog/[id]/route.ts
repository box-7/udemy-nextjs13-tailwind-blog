
import { supabase } from "@/utils/supabaseClient";

// NextApiRequest: リクエスト情報（body, query, methodなど）を持つ型
// NextApiResponse: レスポンス（status, json, sendなど）を返すための型
// import { NextApiRequest, NextApiResponse } from "next";

// NextResponse は、Next.jsのApp Router（app/api ディレクトリ）でAPIレスポンスを返すためのクラス
import { NextResponse } from "next/server";
import { notFound } from "next/navigation";

// App Router（app/apiディレクトリ）では、res（ResponseやNextApiResponse）は使さない
// 代わりに、NextResponse を使ってレスポンスを返す
// export async function GET(req: Request, res: NextApiResponse)

// Requestは、Next.jsのApp Router（app/apiディレクトリ）でAPIルートに渡されるリクエストオブジェクト
export async function GET(req: Request) {
        const id = req.url.split("/blog/")[1];

        const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("id", id)
                .single();

        if (error) {
                return NextResponse.json(error);
        }

        if (!data) {
                notFound();
        }

        return NextResponse.json(data, { status: 200});
}

export async function DELETE(req: Request) {
        // id部分を取得するために以下処理を行う
        const id = req.url.split("/blog/")[1];

        const { error: deleteError } = await supabase
                .from("posts")
                .delete()
                .eq("id", id)

        if (deleteError) {
                return NextResponse.json(deleteError);
        }

        return NextResponse.json({ status: 204});
}