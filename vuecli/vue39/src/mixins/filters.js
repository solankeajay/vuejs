export default{
    filters: {
        makeUpper: function(value){
            return value.toUpperCase();
        },
        contentSnippert: function(value){
            return value.slice(0,70)+"..."
        }
    }
}