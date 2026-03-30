module.exports = {
  apps: [{
    name: "mousa-maskan",
    script: "./dist/index.js",
    cwd: "/var/www/mousa-maskan",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      PORT: "3005"
    },
    error_file: "/var/log/mousa-maskan/error.log",
    out_file: "/var/log/mousa-maskan/out.log",
    log_file: "/var/log/mousa-maskan/combined.log",
    time: true,
    max_memory_restart: "512M",
    restart_delay: 3000,
    max_restarts: 10
  }]
};
