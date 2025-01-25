package com.myapp;

import android.util.Log;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import java.io.File;
import java.io.FileWriter;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class MyExceptionHandler implements Thread.UncaughtExceptionHandler {
    private final Context context;

    private final Thread.UncaughtExceptionHandler defaultHandler;

    // public MyExceptionHandler() {
    // // Get the default handler
    // this.defaultHandler = Thread.getDefaultUncaughtExceptionHandler();
    // }

    public MyExceptionHandler(Context context) {
        this.context = context;
        this.defaultHandler = Thread.getDefaultUncaughtExceptionHandler();

    }

    @Override
    public void uncaughtException(Thread thread, Throwable throwable) {
        System.out.println("custom1");
        System.out.println("CustomExceptionHandler" + "Uncaught exception in thread: " + thread.getName() + throwable);
        System.out.println("custom2");
        String stackTrace = Log.getStackTraceString(throwable);
        System.out.println(stackTrace);

        LocalDateTime now = LocalDateTime.now();
        String formattedDateTime = now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        String urlString = "https://6751e985d1983b9597b4cbfb.mockapi.io/api/error";
        String payload = "{ \"date\": \"" + formattedDateTime + "\", \"log\": \"" + stackTrace + "\" }";
        System.out.println("payload");
        System.out.println(payload);

        try {
            // File directory = getCacheDir();
            // System.out.println(directory);
            // File tempFile = File.createTempFile("LOG-", ".txt", directory);
            // FileWriter writer = new FileWriter(tempFile);
            // writer.write(formattedDateTime + "\nstacktrace" + stackTrace + "\nthrowable"
            // + throwable);
            // writer.close();
            // URL url = new URL(urlString);
            // HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            // connection.setRequestMethod("POST");
            // connection.setRequestProperty("Content-Type", "application/json");
            // connection.setRequestProperty("Accept", "application/json");
            // connection.setDoOutput(true);
            // try (OutputStream os = connection.getOutputStream()) {
            // byte[] input = payload.getBytes("utf-8");
            // os.write(input, 0, input.length);
            // }
            // // Thread.sleep(10000);
            // int responseCode = connection.getResponseCode();
            // System.out.println("Response Code: " + responseCode);
        } catch (Exception e) {
            System.out.println("api call exception");
        }

        System.out.println("custom3");
        android.os.Process.killProcess(android.os.Process.myPid());
        System.exit(1);
        defaultHandler.uncaughtException(thread, throwable);
    }
}
