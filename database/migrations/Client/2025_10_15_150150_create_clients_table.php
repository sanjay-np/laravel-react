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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->string('address');
            $table->string('reference_no')->nullable();
            $table->string('language')->nullable();
            $table->text('other_language')->nullable();
            $table->string('classification')->nullable();
            $table->string('client_type');
            $table->string('type')->nullable();
            $table->string('ndis_no')->nullable();
            $table->string('status')->default('Inactive');
            $table->foreignId('level_id')->nullable()->constrained('levels', 'id');
            $table->string('client_acn')->nullable();
            $table->string('client_crn')->nullable();
            $table->string('pension_status')->nullable();
            $table->string('referral_code')->nullable();
            $table->string('payment_number')->nullable();
            $table->foreignId('hcp_level_id')->nullable()->constrained('hcp_levels', 'id');
            $table->string('care_recipient_id')->nullable();
            $table->float('everyday_living')->nullable();
            $table->float('independence')->nullable();
            $table->foreignId('business_id')->nullable()->constrained('locations', 'id');
            $table->date('agreement_date')->nullable();
            $table->string('agreement_file')->nullable();
            $table->foreignId('caremanager_id')->nullable()->constrained('users', 'id');
            $table->foreignId('scheduler_id')->nullable()->constrained('users', 'id');
            $table->string('carer_id')->nullable();
            $table->text('carer_qualifications')->nullable();
            $table->text('client_notes')->nullable();
            $table->string('primary_contact_name')->nullable();
            $table->string('primary_contact_number')->nullable();
            $table->string('primary_contact_email')->nullable();
            $table->string('primary_contact_address')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->string('relationship_to_client')->nullable();
            $table->string('secondary_contact_name')->nullable();
            $table->string('secondary_contact_number')->nullable();
            $table->string('secondary_contact_email')->nullable();
            $table->string('secondary_contact_address')->nullable();
            $table->string('secondary_relationship_to_client')->nullable();
            $table->string('additional_emails')->nullable();
            $table->string('gp_name')->nullable();
            $table->string('gp_contact_number')->nullable();
            $table->string('gp_address')->nullable();
            $table->string('gp_email')->nullable();
            $table->string('gp_clinic_name')->nullable();
            $table->text('gp_notes')->nullable();
            $table->string('specialist_name')->nullable();
            $table->string('specialist_clinic_name')->nullable();
            $table->string('specialist_email')->nullable();
            $table->string('specialist_phone')->nullable();
            $table->string('speciality')->nullable();
            $table->string('specialist_address')->nullable();
            $table->string('direct_debit_form')->nullable();
            $table->string('recent_discharge_summary')->nullable();
            $table->string('photopath')->nullable();
            $table->text('allergies')->nullable();
            $table->text('exclude_users')->nullable();
            $table->text('secure_document_users')->nullable();
            $table->text('third_party_organisation')->nullable();
            $table->string('account_bank')->nullable();
            $table->string('account_bsb')->nullable();
            $table->string('account_number')->nullable();
            $table->string('account_itf_status')->nullable();
            $table->float('account_itf_value')->nullable();
            $table->string('invoice_to_type')->nullable();
            $table->string('invoice_to_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
