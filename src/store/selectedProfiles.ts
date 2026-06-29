
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useSelectedProfiles=create(persist((set,get)=>({
profiles:[],
addProfile:(p)=>{if(get().profiles.some((x:any)=>x.user_id===p.user_id)) return; set({profiles:[...get().profiles,p]})},
removeProfile:(id)=>set({profiles:get().profiles.filter((x:any)=>x.user_id!==id)})
}),{name:"selected-profiles"}));
