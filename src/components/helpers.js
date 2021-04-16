const getValue = (value) => {
    if (value === '/') {
        return ['1']
    }
    return ['2'];
};

export default getValue;