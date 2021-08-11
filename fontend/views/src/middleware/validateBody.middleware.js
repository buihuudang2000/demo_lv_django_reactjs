// export function commonValidateBody(schema){
//     return () => {
//         const data = req.body;
//         try {
//             const { error, value } = schema.validate(data);
//             if (error) res.status(400).json({message: error.message});
//             else next();
//         } catch (error) {
//             throw error;
//         }
//     };
// }

export function validateBody(schema, data){
    return () => {
        try{
            const {error, value} = schema.validate(data);
            if (error) return {status: "fail", message: error.message}
                else return {status: "successful"}

        } catch(error){
            throw error;
        }
    }
}
