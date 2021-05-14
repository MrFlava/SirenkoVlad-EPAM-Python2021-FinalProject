from .test_setup import TestSetUp


class TestViews(TestSetUp):
    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)
        self.assertEqual(res.status_code, 400)

    def test_user_can_register_correctly(self):
        res = self.client.post(self.register_url, self.user_data, format='json')
        self.assertEqual(res.status_code, 201)

    def test_user_cannot_login_with_no_data(self):
        res = self.client.post(self.login_url)
        self.assertEqual(res.status_code, 400)

    def test_user_can_login_correctly(self):
        self.client.post(self.register_url, self.user_data, format='json')
        res = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(res.status_code, 200)