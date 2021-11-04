export default {
    getData(CD_ITEM) {
        var getInfo = null

        $.ajax({
            url: '/ship/getIdenData',
            dataType: 'json',
            async: false,
            contentType: 'application/json',
            data: JSON.stringify({ CD_ITEM }),
            method: 'POST',
            success: function(t) {
                getInfo = t
            },
            error: function() {
                getInfo = null
            }
        })

        return getInfo
    },
    setData(DATA) {
        var setResult = null

        $.ajax({
            url: '/ship/setIdenData',
            dataType: 'json',
            async: false,
            contentType: 'application/json',
            data: JSON.stringify({ DATA }),
            method: 'POST',
            success: function(t) {
                setResult = t
            }
        })

        return setResult
    }
}