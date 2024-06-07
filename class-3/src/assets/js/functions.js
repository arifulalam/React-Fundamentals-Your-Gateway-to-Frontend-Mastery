/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function func_list(tag, obj, classes) {
    let list = [];
    for (const [key, value] of Object.entries(obj)) {
        list.push('<'+tag+' class="'+classes+'"><a href="'+value.url+'">'+value.text+'</a></'+tag+'>');
    }
    return list;
}

export default {func_list};