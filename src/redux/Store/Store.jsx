import { configureStore } from "@reduxjs/toolkit";
import {AuthSlice} from "../AuthSlice"
import { blogSlice } from "../BlogSlice";
import { BlogDeatilsSlice } from "../BlogDetailsSlice";
import { StudentSlice } from "../StudentSlice";
import { CategorySlice } from "../CategorySlice";
//import { CategortWithBlog} from "../CategoryWithBlogSlice";

const Store=configureStore({
    reducer:{
        Auth:AuthSlice.reducer,
        blog:blogSlice.reducer,
        detailBlog:BlogDeatilsSlice.reducer,
        Student:StudentSlice.reducer,
        categorySlice:CategorySlice.reducer,
       // catWithBlog:CategortWithBlog.reducer,
    }
});

export default Store;