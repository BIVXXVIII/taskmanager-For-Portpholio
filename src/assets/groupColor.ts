interface GroupColorInterface {
    orange: string;
    green: string;
    blue: string;
    white: string;
    red: string;
}

export const groupColor: GroupColorInterface = {
    orange: "bg-orange-400 text-white",
    green: "bg-green-600 text-white",
    blue: "bg-blue-400 text-white",
    white: "bg-white text-stone-800",
    red: "bg-red-500 text-white",
};
export type KeyOfGroupColor = keyof GroupColorInterface;
