module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let responseMessage;

    try{
        let marks = req.body.marks
        var total_marks=0;
        marks.forEach(ele => {
            total_marks = total_marks + ele
        });
        responseMessage = `Total marks: ${total_marks}`

    }catch(error){
        responseMessage = "This HTTP triggered function executed successfully. Pass marks in the request body for a personalized response."
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}