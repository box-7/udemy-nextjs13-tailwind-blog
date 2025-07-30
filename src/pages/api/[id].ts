// import { supabase } from "@/utils/supabaseClient";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//         req: NextApiRequest,
//         res: NextApiResponse
// ) {
//         const {id} = req.query;

//         switch (req.method) {
//                 case "GET":
//                         const {data, error } = await supabase.from("posts").select("*").eq("id", id).single();

//                         if (error) {
//                                 return res.status(500).json({ error: error.message });
//                         }

//                         return res.status(200).json(data);

//                 case "DELETE":
//                         const { error: deleteError } = await supabase.from("posts").delete().eq("id", id);

//                         if (deleteError) {
//                                 return res.status(500).json({ error: deleteError.message });
//                         }
//                         // return res.status(200).json({ message: "Post deleted successfully" });

//                         // 204が適切 正常に削除されたが、返すコンテンツはない
//                         return res.status(204).json({ message: "Post deleted successfully" });

//         }
// }