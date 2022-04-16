const { validateAll } = request('indicative/validator');

module.exports = (req, res, next) => {
    try {
        await validateAll(req.body, {
            title: 'required',
            choices : 'required| array | min:2',
            'choices. *' : 'required | string'
        })

        return next
    }

    catch(errors) {

        return res.status(422).json(errors)

    }
};
