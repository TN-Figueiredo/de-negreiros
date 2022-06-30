// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import siteSettings from "./documents/siteSettings";
import navbarMenu from "./documents/navbarMenu";
import homePage from "./documents/homePage";
import page from "./documents/page";
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";

// Object types
import navbarMenuItems from "./objects/navbarMenuItems";
import logo from "./objects/logo";
import banner from "./objects/sections/banner";
import smallSection from "./objects/sections/smallSection";
import mediumSection from "./objects/sections/mediumSection";
import largeSection from "./objects/sections/largeSection";
import overlaySection from "./objects/sections/overlaySection";
import titleAndContent from "./objects/titleAndContent";
import tabbedContent from "./objects/tabbedContent";
import latestPostsSection from "./objects/sections/latestPostsSection";
import form from "./objects/form";
import inputText from "./objects/form/inputText";
import inputMessage from "./objects/form/inputMessage";
import inputSelect from "./objects/form/inputSelect";
import whatsappPlaceholder from "./objects/whatsappPlaceholder";
import youtube from "./objects/youtube";
import button from "./objects/button";
import socialMedia from "./objects/socialMedia";
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import authorList from "./objects/author/authorList";
import whatsappOverlay from "./objects/whatsappOverlay";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    homePage,
    page,
    navbarMenu,
    navbarMenuItems,
    banner,
    smallSection,
    mediumSection,
    largeSection,
    titleAndContent,
    tabbedContent,
    latestPostsSection,
    // input start
    form,
    inputText,
    inputMessage,
    inputSelect,
    // input end
    // placeholders
    whatsappPlaceholder,
    //
    youtube,
    button,
    socialMedia,
    post,
    category,
    author,
    logo,
    mainImage,
    authorReference,
    authorList,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    overlaySection,
    whatsappOverlay,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
