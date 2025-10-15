<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('type')->nullable();
            $table->string('title')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('phone')->nullable();
            $table->string('preferred_name')->nullable();
            $table->string('gender')->nullable();
            $table->string('address1')->nullable();
            $table->string('address2')->nullable();
            $table->string('suburb')->nullable();
            $table->string('postcode')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->string('trading_name')->nullable();
            $table->string('nationality')->nullable();
            $table->date('dob')->nullable();
            $table->date('onboarding_date')->nullable();
            $table->string('abn')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('employing_entity')->nullable();
            $table->string('employee_code')->nullable();
            $table->text('access_business')->nullable();
            $table->string('employment_type')->nullable();
            $table->string('contract_type')->nullable();
            $table->string('job_title')->nullable();
            $table->string('actual_hours_days')->nullable();
            $table->string('fte_hours_days')->nullable();
            $table->string('pay_hours')->nullable();
            $table->string('sync_payroll')->nullable();
            $table->string('initial_earning')->default(0);
            $table->string('initial_payg')->default(0);
            $table->string('initial_sg')->default(0);
            $table->text('account_number')->nullable();
            $table->text('bsb')->nullable();
            $table->text('super_annuation_name')->nullable();
            $table->text('super_annuation_member_no')->nullable();
            $table->text('taxfile_number')->nullable();
            $table->boolean('is_2fa')->default(false);
            $table->string('status')->nullable();
            $table->string('emergency_contact_name')->nullable();
            $table->string('emergency_contact_number')->nullable();
            $table->string('emergency_contact_number1')->nullable();
            $table->string('emergency_contact_email')->nullable();
            $table->string('emergency_contact_address')->nullable();
            $table->string('emergency_contact_relation')->nullable();
            $table->string('fcm_token')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
