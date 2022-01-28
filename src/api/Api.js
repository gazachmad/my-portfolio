import $ from "jquery";

export const Api = {
    getActivity: async () => {
        const results = await $.ajax({
            type: 'GET',
            url: 'https://wakatime.com/share/@gazachmad/3642e49d-4f1b-483d-8181-be7cddb9725c.json',
            dataType: 'jsonp'
        });
        let data = [];
        results.data.forEach(element => {
            data.push({ name: element.name, y: element.percent, color: element.color });
        });
        return data;
    }
}