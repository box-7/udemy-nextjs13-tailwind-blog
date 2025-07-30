// import { supabase } from "@/utils/supabaseClient";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//         req: NextApiRequest,
//         res: NextApiResponse
// ) {
//         const {data, error } = await supabase.from("posts").select("*");

//         if (error) {
//                 return res.status(500).json({ error: error.message });
//         }

//         return res.status(200).json(data);
// }

import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
        const { data, error } = await supabase.from("posts").select("*");

        if (error) {
                return NextResponse.json(error);

        }
        return NextResponse.json(data, { status: 200 });
}
