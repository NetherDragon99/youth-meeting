<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HomePageAuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_user_sees_login_and_register_ctas_on_home_page(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertSee('Register');
        $response->assertSee('Login');
        $response->assertSee(route('register'));
        $response->assertSee(route('login'));
    }

    public function test_authenticated_user_sees_notification_and_rank_details_on_home_page(): void
    {
        $user = User::factory()->create([
            'name' => 'Stephan',
            'email' => 'stephan@example.com',
            'password' => bcrypt('password'),
        ]);

        $this->actingAs($user);

        $response = $this->get('/');

        $response->assertOk();
        $response->assertSee('notificationIcon');
        $response->assertSee('notifications');
        $response->assertSee('notficationData');
        $response->assertSee('cocsNo');
        $response->assertSee('userPlaceDiv');
    }
}
