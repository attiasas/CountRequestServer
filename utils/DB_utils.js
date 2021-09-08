var count = 0;

exports.addCount = async function()
{
    // return count++; // return count excluding the current
    return ++count; // return count including the current
}