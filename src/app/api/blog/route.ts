
import { supabase } from "@/utils/supabaseClient";

// NextApiRequest: リクエスト情報（body, query, methodなど）を持つ型
// NextApiResponse: レスポンス（status, json, sendなど）を返すための型
// import { NextApiRequest, NextApiResponse } from "next";

// NextResponse は、Next.jsのApp Router（app/api ディレクトリ）でAPIレスポンスを返すためのクラス
import { NextResponse } from "next/server";

export async function GET() {
        const { data, error } = await supabase.from("posts").select("*");

        if (error) {
                return NextResponse.json(error);

        }
        return NextResponse.json(data, { status: 200 });
}

// App Router（app/apiディレクトリ）では、res（ResponseやNextApiResponse）は使さない
// 代わりに、NextResponse を使ってレスポンスを返す
// export async function POST(req: Request, res: NextApiResponse) {

// Requestは、Next.jsのApp Router（app/apiディレクトリ）でAPIルートに渡されるリクエストオブジェクト
export async function POST(req: Request) {
        const { id, title, content } = await req.json();

        const { data, error } = await supabase
                .from("posts")
                .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

        if (error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(data, { status: 201 });
}
