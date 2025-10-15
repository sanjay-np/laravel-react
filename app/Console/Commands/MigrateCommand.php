<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class MigrateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate {--connection= : The database connection to use (host|client)} {--fresh : Drop all tables before running migrations}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run migrations for a specific connection (e.g., host or client).';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $connection = $this->option('connection');
        $fresh = $this->option('fresh');

        if (!in_array($connection, ['host', 'client'])) {
            $this->error('Please specify a valid --connection option (host or client).');
            return Command::FAILURE;
        }

        $migrationPath = database_path("migrations/" . ucfirst($connection));

        if (!File::isDirectory($migrationPath)) {
            $this->error("Migration folder not found for connection: {$connection}");
            return Command::FAILURE;
        }

        $this->info("Running migrations for connection [{$connection}] using path: {$migrationPath}");

        // Decide which migration command to run
        $command = $fresh ? 'migrate:fresh' : 'migrate';

        // Execute the appropriate Artisan command
        Artisan::call($command, [
            '--database' => "app_{$connection}",
            '--path' => "database/migrations/" . ucfirst($connection),
            '--force' => true,
        ]);

        $this->line(Artisan::output());
        $this->info("Migrations completed for connection [{$connection}].");
        return Command::SUCCESS;
    }
}
