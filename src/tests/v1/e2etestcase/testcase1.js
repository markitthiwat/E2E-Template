import { expect, use } from 'chai';

import * as api from '../../../api/main/v1';
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

describe('IT Case', function () {

    before(async function () {});
    
    // Apply Loan RL
    it('Test Post', async function () {

        let loginResponse = await api.PostImage({
        });

        expect(loginResponse.status).to.equal(200);

    });

    after(function(){});
});