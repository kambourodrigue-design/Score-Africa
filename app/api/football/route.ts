import {NextRequest,NextResponse} from "next/server";
const BASE=process.env.API_FOOTBALL_BASE_URL||"https://v3.football.api-sports.io";
const allowed=["fixtures","standings","leagues","teams","players","predictions"];
export async function GET(req:NextRequest){
 const key=process.env.API_FOOTBALL_KEY;
 if(!key)return NextResponse.json({error:"API_FOOTBALL_KEY manquante"},{status:500});
 const endpoint=req.nextUrl.searchParams.get("endpoint");
 if(!endpoint||!allowed.includes(endpoint))return NextResponse.json({error:"Endpoint non autorisé"},{status:400});
 const p=new URLSearchParams(); req.nextUrl.searchParams.forEach((v,k)=>{if(k!=="endpoint")p.set(k,v)});
 try{
  const r=await fetch(`${BASE}/${endpoint}?${p}`,{headers:{"x-apisports-key":key},cache:"no-store"});
  const data=await r.json(); return NextResponse.json(data,{status:r.status});
 }catch{return NextResponse.json({error:"API-Football inaccessible"},{status:502})}
}