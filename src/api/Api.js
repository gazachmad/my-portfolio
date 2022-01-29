import $ from "jquery";

export const Api = {
    getActivity: async () => {
        const results = await Promise.all([
            $.ajax({
                type: 'GET',
                url: 'https://wakatime.com/share/@gazachmad/778e68c3-f5b4-4946-b31e-413bcd4cecf5.json',
                dataType: 'jsonp'
            }),
            $.ajax({
                type: 'GET',
                url: 'https://wakatime.com/share/@gazachmad/3642e49d-4f1b-483d-8181-be7cddb9725c.json',
                dataType: 'jsonp'
            })
        ]);
        let response = {
            codingActivity: {
                categories: [],
                series: [],
                labels: [],
            },
            languages: []
        };
        let data = [];
        results[0].data.forEach(element => {
            let dateText = element.range.text;
            if (dateText.length > 9) {
                dateText = element.range.text.substr(4, dateText.length - 9);
            }
            response.codingActivity.categories.push(dateText);
            data.push(parseFloat(element.grand_total.decimal));
            response.codingActivity.labels.push(element.grand_total.text);
        });
        response.codingActivity.series.push({ name: 'Coding', data: data })
        results[1].data.forEach(element => {
            response.languages.push({ name: element.name, y: element.percent, color: element.color });
        });
        return response;
    }
}